//login

interface LoginForm {
  username: string;
  password: string;
}

interface DataType {
  token: string;
}

interface LoginResponseData {
  code: number;
  data: DataType;
}
