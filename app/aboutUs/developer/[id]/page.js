// ourDomain.com/aboutUs/developer/[id]

const id = ({ params }) => {
    const developerDetails = {
        1: { name: 'Yash', role: 'Senior Developer', bio: 'Experienced in building robust applications.' },
        2: { name: 'Vaibhav', role: 'Backend Developer', bio: 'Specialized in designing efficient backend systems.' },
        3: { name: 'Suresh', role: 'Frontend Developer', bio: 'Passionate about creating intuitive user interfaces.' },
    };

    const developer = developerDetails[params.id];

    return (
        <div>
            <h1>Developer Details</h1>
            {developer && (
                <div>
                    <h2>Name: {developer.name}</h2>
                    <p>Role: {developer.role}</p>
                    <p>Bio: {developer.bio}</p>
                </div>
            )}
        </div>
    );
};

export default id;