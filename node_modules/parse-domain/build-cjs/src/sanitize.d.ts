import isIp from "is-ip";
import { Label } from "./parse-domain";
import { NO_HOSTNAME } from "./from-url";
export declare enum ValidationErrorType {
    NoHostname = "NO_HOSTNAME",
    DomainMaxLength = "DOMAIN_MAX_LENGTH",
    LabelMinLength = "LABEL_MIN_LENGTH",
    LabelMaxLength = "LABEL_MAX_LENGTH",
    LabelInvalidCharacter = "LABEL_INVALID_CHARACTER"
}
export declare type ValidationError = {
    type: ValidationErrorType;
    message: string;
    column: number;
};
export declare enum SanitizationResultType {
    ValidIp = "VALID_IP",
    ValidDomain = "VALID_DOMAIN",
    Error = "ERROR"
}
export declare type SanitizationResultValidIp = {
    type: SanitizationResultType.ValidIp;
    ip: string;
    ipVersion: Exclude<ReturnType<typeof isIp.version>, undefined>;
};
export declare type SanitizationResultValidDomain = {
    type: SanitizationResultType.ValidDomain;
    domain: string;
    labels: Array<Label>;
};
export declare type SanitizationResultError = {
    type: SanitizationResultType.Error;
    errors: Array<ValidationError>;
};
export declare type SanitizationResult = SanitizationResultValidIp | SanitizationResultValidDomain | SanitizationResultError;
export declare const sanitize: (input: string | typeof NO_HOSTNAME) => SanitizationResult;
