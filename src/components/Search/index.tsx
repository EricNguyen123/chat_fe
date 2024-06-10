import React, { useState, useEffect, useRef, ChangeEvent } from 'react';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';

import HeadlessTippy from '@tippyjs/react/headless';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '../../components/Popper';
import AccountItem from '../../components/AccountItem';
import { Search1Icon } from '../../components/Icons';

import { useDebounce } from '../../hooks';

import * as searchServices from '../../services/searchServices';
import { getOtherUser } from '../../redux/users/actions';
import { useDispatch } from 'react-redux';

const cx = classNames.bind(styles);

interface Props {
    className?: string;
}

const MAX_INITIAL_RESULT = process.env.REACT_APP_MAX_INITIAL_RESULT;

const Search: React.FC<Props> = ({ className }) => {
    const [searchValue, setSearchValue] = useState<string>('');
    const [searchResults, setSearchResults] = useState<any[]>([]);
    const [showResults, setShowResults] = useState<boolean>(true);
    const [loading, setLoading] = useState<boolean>(false);
    const [loadMoreCount, setLoadMoreCount] = useState<number>(1);
    const dispatch = useDispatch();
    const inputRef = useRef<HTMLInputElement>(null);

    const debounced = useDebounce(searchValue, 500);

    useEffect(() => {
        if (!debounced.trim()) {
            setSearchResults([]);
            return;
        }

        const fetchApi = async () => {
            setLoading(true);

            const result = await searchServices.search({ q: debounced });
            setSearchResults(result.slice(0, MAX_INITIAL_RESULT && parseInt(MAX_INITIAL_RESULT, 10)));
            setLoading(false);
            setLoadMoreCount(1);
        };

        fetchApi();
    }, [debounced]);

    const handleHideResults = () => {
        setShowResults(false);
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (!value.startsWith(' ')) {
            setSearchValue(value);
        }
    };

    const handleUser = (user: any) => {
        dispatch(getOtherUser({ id: user.id }));
    };

    const handleClick = (user: any) => {
        setSearchValue('');
        handleUser(user);
    };

    const handleLoadMoreResults = async () => {
        setLoading(true);
        const result = await searchServices.search({ q: debounced });
        setSearchResults(result.slice(0, MAX_INITIAL_RESULT && parseInt(MAX_INITIAL_RESULT, 10) * (loadMoreCount + 1)));
        setLoadMoreCount(loadMoreCount + 1);
        setLoading(false);
    };

    return (
        <div className={className}>
            <HeadlessTippy
                interactive
                visible={showResults && searchValue !== ''}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex={-1} {...attrs}>
                        <PopperWrapper>
                            <div className={cx('box-search')}>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                {searchResults.map((result) => (
                                    <AccountItem key={result.id} data={result} onClick={() => handleClick(result)} />
                                ))}
                                <span className={cx('footer')} onClick={handleLoadMoreResults}>
                                    See more search results of "{searchValue}"
                                </span>
                            </div>
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHideResults}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        placeholder="Search"
                        spellCheck={false}
                        onChange={handleChange}
                        onFocus={() => setShowResults(true)}
                        className={cx('input')}
                    />
                    <span className={cx('line')}></span>
                    {!!searchValue && !loading && (
                        <button
                            className={cx('clear')}
                            onClick={() => {
                                setSearchValue('');
                                inputRef.current?.focus();
                            }}
                        >
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}

                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                    <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                        <Search1Icon className={cx('custom')} />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
};

export default Search;
