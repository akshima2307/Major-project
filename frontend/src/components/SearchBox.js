import React, {useState} from 'react';

const SearchBox = ({history}) => {

    const [keyword, setKeyword] = useState("")

    const submitHandler = (e) => {
        e.preventDefault()
        if(keyword.trim()){
            history.push(`/search/${keyword}`)
        }else{
            history.push('/home')
        }
    }

    return (
        <form className='searchForm' onSubmit={submitHandler}>
            <div className='searchBox'>
                <input type="text"  placeholder="Search with post name..." 
                    name="q"
                    onChange={((e) => setKeyword(e.target.value))}
                />
                <i class="fa fa-search" aria-hidden="true"></i>
            </div>
            <button type="submit">Search</button>
        </form>
    )
}

export default SearchBox;