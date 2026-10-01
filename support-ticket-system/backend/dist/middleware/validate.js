"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
const validate = (schema) => (req, res, next) => {
    const parsed = schema.safeParse({ body: req.body, params: req.params, query: req.query });
    if (!parsed.success) {
        res.status(400).json({ message: 'Validation failed', errors: parsed.error.flatten() });
        return;
    }
    req.validated = parsed.data;
    next();
};
exports.validate = validate;
