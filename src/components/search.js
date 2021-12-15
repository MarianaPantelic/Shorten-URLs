import React, { useRef, useState } from 'react';

const Search = () => {

    const [links, setLinks] = useState([]);
    const [shortLinks, setShortLinks] = useState([]);
    const [isClicked, setIsClicked] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    const inputRef = useRef();

    const shortenLink = async (link) => {
        let newShortLinks = [];
        let newIsClicked = [...isClicked]
        await fetch(`https://api.shrtco.de/v2/shorten?url=${link}`, {method: 'GET'})
        .then(response=> response.json())
        .then(response => newShortLinks = [...shortLinks, response.result.full_short_link2]);
        localStorage.setItem('shortLinks', JSON.stringify(newShortLinks))
        setShortLinks(newShortLinks);
        newIsClicked.push(false);
        setIsClicked(newIsClicked);
        setErrorMessage("");
        console.log(isClicked)
    }

    const handleClick = () => {
        if(inputRef.current.value === "") {
            setErrorMessage("Please add a link");
        } else {
            if(isValidUrl(inputRef.current.value)) {
                let newLinks = [...links, inputRef.current.value];
                localStorage.setItem('links', JSON.stringify(newLinks));
                setLinks(newLinks);
                shortenLink(inputRef.current.value);
                inputRef.current.value = "";
            } else {
                setErrorMessage("Please add a valid link");
            } 
        }
    }

    const clearResults = () => {
        localStorage.clear();
        setLinks([]);
        setShortLinks([]);
    }

    const copyLink = (idx) => {
        console.log(idx)
        let updateIsClicked = [...isClicked];
        console.log(updateIsClicked);
        updateIsClicked[idx] = true;
        console.log(updateIsClicked);
        setIsClicked(updateIsClicked);
        navigator.clipboard.writeText(localStorageShortLinks[idx]);
    }

    const isValidUrl = (url) => {
        try {
          new URL(url);
        } catch (e) {
          console.error(e);
          return false;
        }
        return true;
    };

    let localStorageLinks = JSON.parse(localStorage.getItem('links'));
    let localStorageShortLinks = JSON.parse(localStorage.getItem('shortLinks'));
    if(localStorageShortLinks) console.log(localStorageShortLinks[0])


    return (
        <div className="bg-grey">
            <div className="search-container d-flex">
                <div className="d-flex input-container">
                    <input type="text" className={`search-input ${errorMessage ? 'input-border' : ''}`} placeholder="Shorten a link here..." ref={inputRef}></input>
                    {errorMessage ? <p className="error">{errorMessage}</p> : null}
                </div>
                <div role="button" id="btn-shorten" onClick={handleClick}>Shorten it!</div>
            </div>
            
            <div className="results-container">
            {localStorageLinks && localStorageShortLinks ? localStorageLinks.map((link,idx) =>
                <div className="d-flex justify-content-between align-items-center result-container" key={idx}>
                    <div className="link">{link}</div>
                    <div className="d-flex align-items-center short-link-container">
                        <div><a href={localStorageShortLinks[idx]} target="_blank" rel="noreferrer">{localStorageShortLinks[idx]}</a></div>
                        {!isClicked[idx] ? <div role="button" className="btn-copy" onClick={() => copyLink(idx)}>Copy</div> : <div role="button" className="btn-copied">Copied</div>}
                    </div>
                </div>
            ):null}
            </div>
            {localStorageLinks && localStorageShortLinks ? <div role="button" className="btn-clear" onClick={clearResults}>Clear All</div> : null}
        </div>
    );
};

export default Search;