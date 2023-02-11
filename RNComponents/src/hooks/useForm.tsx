import { useState } from 'react';

export const useForm = <T extends Object>(inicialState: T) => {
    const [form, setForm] = useState(inicialState);

    const onChange = <V extends Object>(value: V, filed: keyof T) => {
        setForm({
            ...form,
            [filed]: value,
        });
    };

    return {
        ...form,
        form,
        onChange,

    };
};


