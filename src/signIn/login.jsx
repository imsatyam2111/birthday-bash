import { useState } from 'react';
import { useForm, Controller } from "react-hook-form";
import { Button, TextField, Typography } from "@material-ui/core"
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../redux/reducers/isLoggedIn';

const Login = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const [err, setErr] = useState(``);

	const defaultValues = {
		email: '',
		password: '',
	};
	const credentials = {
		email: `abc@gmail.com`,
		password: `12345678`,
	}
	const {
		register,
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: `onChange`,
		defaultValues,
    reValidateMode: `onChange`,
  });

	const onSubmit = (data) => {
  	(data.email === credentials.email && data.password === credentials.password)
			? history.push('/') 
			: setErr('credentials do not match');
		dispatch(login());
  };

	return ( 
		<div className="login">
			<h1>Login</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Controller
					name="email"
					render={({ field: { onChange, value } }) => (
						<TextField
							className="input"
							type="email"
							label="Email *"
							variant="outlined"
							onChange={onChange}
							value={value}
							{...register("email", { required: true })}
							error={Boolean(errors.email)}
							helperText={errors.email && "Required Field"}
							size="small"
						/>
					)}
					control={control}
				/>
				<Controller
					name="password"
					render={({ field: { onChange, value } }) => (
						<TextField
							className="input"
							label="Password *"
							type="password"
							variant="outlined"
							onChange={onChange}
							value={value}
							{...register("password", { required: true, minLength: 8})}
							error={Boolean(errors.password)}
							helperText={errors.password && "Required Field"}
							size="small"
						/>
					)}
					control={control}
				/>
				{err !== `` && <Typography variant="caption" className="err-message">{err}</Typography>}<br />
				<Button variant="outlined" type="submit">Login</Button>
			</form>
		</div>
	 );
}
 
export default Login;