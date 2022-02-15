import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm, Controller } from "react-hook-form";
import { Button, TextField, Typography } from "@material-ui/core"
import { useHistory } from 'react-router-dom';
import ClientCaptcha from "react-client-captcha"
import { login } from '../redux/reducers/isLoggedIn';

const SignUp = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const [captcha, setCaptcha] = useState(``);
	const [err, setErr] = useState(``);

	const setCode = (code )=> {
    setCaptcha(code)
  }

	const defaultValues = {
		email: '',
		password: '',
		confirmPassword: ``,
		captchaCode: ``
	};

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
  	if (data.password === data.confirmPassword) {
			if (data.captchaCode === captcha) {
				setErr('');
				dispatch(login());
				history.push('/');
			} else {
				setErr('Captcha do not match')
			}
		} else {
			setErr('Passwords do not match');
		}
  };

	return ( 
		<div className="signup">
			<h1>Sign Up</h1>
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
							helperText={errors.password && "Password must be minimum of 8 characters"}
							size="small"
						/>
					)}
					control={control}
				/>
				<Controller
					name="confirmPassword"
					render={({ field: { onChange, value } }) => (
						<TextField
							className="input"
							label="Confirm Password *"
							type="password"
							variant="outlined"
							onChange={onChange}
							value={value}
							{...register("confirmPassword", { required: true, minLength: 8})}
							error={Boolean(errors.confirmPassword)}
							helperText={errors.password && "Password must be minimum of 8 characters"}
							size="small"
						/>
					)}
					control={control}
				/>
				{err !== `` && <Typography variant="caption" className="err-message">{err}</Typography>}<br />
				<ClientCaptcha captchaCode={setCode}/>
				<Controller
					name="captchaCode"
					render={({ field: { onChange, value } }) => (
						<TextField
							className="input"
							label="Captcha *"
							type="text"
							variant="outlined"
							onChange={onChange}
							value={value}
							{...register("captchaCode", { required: true})}
							error={Boolean(errors.captchaCode)}
							helperText={errors.captchaCode && "Captcha is required*"}
							size="small"
						/>
					)}
					control={control}
				/>
				<Button variant="outlined" type="submit">Sign up</Button>
			</form>
		</div>
	 );
}
 
export default SignUp;