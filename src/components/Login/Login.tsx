import { Button } from '../../common/Button/Button.tsx';
import { useForm, type FieldValues } from 'react-hook-form';

type FormInputs = {
    email: string;
    password: string;
};
export function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        getValues,
    } = useForm<FormInputs>();
    const onSubmit = async (_data: FieldValues) => {
        const emailSubmitted = getValues('email');
        const passwordSubmitted = getValues().password;
        console.log(emailSubmitted);
        console.log(passwordSubmitted);
        await new Promise((resolve) => setTimeout(resolve, 1000));
    };
    return (
        <section>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-y-2"
            >
                <input
                    {...register('email', {
                        required: 'First name is required',
                    })}
                    placeholder="Email"
                    type="email"
                    className="px-4 py-2 rounded-lg border-2 border-color-3-150"
                />
                {errors.email && (
                    <p className="text-red-600"> {errors.email.message}</p>
                )}
                <input
                    {...register('password', {
                        required: 'Last name is required',
                    })}
                    type="password"
                    placeholder="Last Name"
                    className="px-4 py-2 rounded-lg border-2 border-color-3-150"
                />
                {errors.password && (
                    <p className="text-red-600"> {errors.password.message}</p>
                )}
                <Button type="submit" disabled={isSubmitting}>
                    Login
                </Button>
            </form>
        </section>
    );
}
