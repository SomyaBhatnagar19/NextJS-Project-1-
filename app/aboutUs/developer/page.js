//ourDomain.com/aboutUs/developer

import Link from 'next/link';

const DeveloperList = () => {
    const details = [
        { id: 1, name: 'Yash', role: 'Senior Developer' },
        { id: 2, name: 'Vaibhav', role: 'Backend Developer' },
        { id: 3, name: 'Suresh', role: 'Frontend Developer' }
    ];

    return (
        <div>
            <h1>List of Developers :- </h1>
            <ul>
                {details.map((developer) => (
                    <li key={developer.id}>
                        <Link href={`/aboutUs/developer/${developer.id}`}>
                            {developer.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DeveloperList;