import { useLoaderData } from "react-router-dom";

const UserDetails = () => {

    const user = useLoaderData();

    const {name, email, website, phone} = user;

    return (
        <div>
            <h2>Name: {name}</h2>
            <h2>Phone: {phone}</h2>
            <h2>Email: {email}</h2>
            <h2>Website: {website}</h2>
        </div>
    );
};

export default UserDetails;