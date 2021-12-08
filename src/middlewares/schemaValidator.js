import { Validator } from 'jsonschema';
import { schema } from './stateSchema';

const v = new Validator();

const schemaValidator = ({ getState }) => (next) => (action) => {
  next(action);

  if (!v.validate(getState(), schema).valid) {
    console.warn('Invalid schema');
  }
}

export default schemaValidator;
