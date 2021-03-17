import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '../../reducers/reposReducer';
import { getRepos } from '../actions/repos';
import { createPages } from '../utils/pagesCreator';
import "./main.less"
import Repo from './repo/Repo';

const Main = () => {
    const dispatch = useDispatch()
    const repos = useSelector(state => state.repos.items)
    const isFetching = useSelector(state => state.repos.isFetching)
    const currentPage = useSelector(state => state.repos.currentPage)
    const totalCount = useSelector(state => state.repos.totalCount)
    const perPage = useSelector(state => state.repos.perPage)
    const [searchValue, setSearchValue] = useState("")

    const pagesCount = Math.ceil(totalCount / perPage)
    const pages = []
    createPages(pages, pagesCount, currentPage)

    useEffect(() => {
        dispatch(getRepos(searchValue, currentPage, perPage))
    }, [currentPage])

    const searchHandler = () => {
        dispatch(setCurrentPage(1))
        dispatch(getRepos(searchValue, currentPage, perPage))
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
                    <div className="fetching"></div>
            }
            <div className="pages">
                {pages.map((page, index) =>
                    <span key={index}
                        className={currentPage == page ? "current-page" : "page"}
                        onClick={() => dispatch(setCurrentPage(page))}>{page}</span>)}
            </div>
        </div>);
};

export default Main;