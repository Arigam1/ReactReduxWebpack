import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRepos } from '../actions/repos';
import "./main.less"
import Repo from './repo/Repo';

const Main = () => {
    const dispatch = useDispatch()
    const repos = useSelector(state => state.repos.items)
    const isFetching = useSelector(state => state.repos.isFetching)
    const [searchValue, setSearchValue] = useState("")

    useEffect(() => {
        dispatch(getRepos())
    }, [])

    const searchHandler = () => {
        dispatch(getRepos(searchValue))
    }

    return (
        <div>
            <div>
                <input value={searchValue} onChange={(e) => { setSearchValue(e.target.value) }} type="text" placeholder="Input name" className="search-input" />
                <button onClick={() => { searchHandler() }} className="search-button"> search </button>
            </div>
            {
                isFetching === false
                    ?
                    repos.map(repo =>
                        <Repo key={repo.id} repo={repo} />
                    )
                    :
                    <div className="fetching"></div>}
        </div>);
};

export default Main;