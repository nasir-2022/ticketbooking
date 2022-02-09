import { ValidationError, ValidatorOptions } from "class-validator";
/**
 * ValidationPipeOptions interface
 * @author Md Nasir Hussain
 */
export interface ValidationPipeOptions extends ValidatorOptions {
  /**
   * enable/disable validation
   */
    transform?: boolean;
    /**
     * disable message
     */
    disableErrorMessages?: boolean;
    /**
     * validatein message
     */
    exceptionFactory?: (errors: ValidationError[]) => any;
  }