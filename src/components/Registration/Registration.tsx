import { Input } from '../../common/Input/Input.tsx';
import { Button } from '../../common/Button/Button.tsx';

export function Registration() {
    return (
        <section>
            <form>
                <Input placeholder="First Name" />
                <Input placeholder="Last Name" />
                <Input type="email" placeholder="Email" />
                <Button type="submit">Register</Button>
            </form>
        </section>
    );
}
