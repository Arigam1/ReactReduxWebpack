import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getCurrentRepos, getContributors } from '../actions/repos';

const Card = (props) => {
    const { username, reponame } = useParams()
    const [repo, setRepo] = useState({ owner: {} })
    const [contributors, setContributors] = useState([])


    useEffect(() => {
        getCurrentRepos(username, reponame, setRepo)
        getContributors(username, reponame, setContributors)
    }, [])
    return (
        <div>
            <button onClick={() => props.history.goBack()}>Back</button>
            Yes!
            <div>
                <img src={repo.owner.avatar_url} />
                <div>{repo.name}</div>
                <div>{repo.stargazers_count}</div>
            </div>

            {contributors.map((c, index) => <div >{index + 1}. {c.login}</div>)
            }

        </div >
    );
};

export default Card;