export default function Input(props) {
    const handleChange = (event) => {
        const value = event.target.value;
        props.onChange(value);
    }

    return (
        <input
            {...props}
            className="bg-amber-100 py-3 px-6 w-96 rounded"
            onChange={handleChange}
        />
    )
}