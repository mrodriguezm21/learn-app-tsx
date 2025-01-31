import { Button } from '../../common/Button/Button.tsx';
import { useForm, type FieldValues } from 'react-hook-form';

type FormInputs = {
    firstName: string;
    lastName: string;
    email: string;
};
export function Registration() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<FormInputs>();
    const onSubmit = async (data: FieldValues) => {
        console.log(data);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        reset();
    };
    return (
        <section>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-y-2"
            >
                <input
                    {...register('firstName', {
                        required: 'First name is required',
                    })}
                    placeholder="First Name"
                    className="px-4 py-2 rounded-lg border-2 border-color-3-150"
                />
                {errors.firstName && (
                    <p className="text-red-600"> {errors.firstName.message}</p>
                )}
                <input
                    {...register('lastName', {
                        required: 'Last name is required',
                    })}
                    placeholder="Last Name"
                    className="px-4 py-2 rounded-lg border-2 border-color-3-150"
                />
                {errors.lastName && (
                    <p className="text-red-600"> {errors.lastName.message}</p>
                )}
                <input
                    {...register('email', {
                        required: 'Email is required',
                        minLength: {
                            value: 3,
                            message: 'Email should be at least 3 characters',
                        },
                    })}
                    type="email"
                    placeholder="Email"
                    className="px-4 py-2 rounded-lg border-2 border-color-3-150"
                />
                {errors.email && (
                    <p className="text-red-600"> {errors.email.message}</p>
                )}
                <Button type="submit" disabled={isSubmitting}>
                    Register
                </Button>
            </form>
        </section>
    );
}
