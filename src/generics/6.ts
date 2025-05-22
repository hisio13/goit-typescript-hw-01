type Errors = {
  email?: string[];
  firstName?: string[];
  lastName?: string[];
  phone?: string[];
};

type Form = {
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  errors: Errors;
};

type Params = Omit<Form, 'errors'>;

const paramsExample: Params = {
  email: 'user@example.com',
  firstName: 'Alice',
  lastName: 'Smith',
  phone: '1234567890',
};