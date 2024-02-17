import React from 'react'

const Pagination = ({page, lastPage, setPage, setAnimeAPI }) => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    const handlePrev = () => {
        if(page > 1) {
            setAnimeAPI(null)
            setPage(page - 1)
            scrollToTop()
        }
    }

    const handleNext = () => {
        if(page < lastPage) {
            setAnimeAPI(null)
            setPage(page + 1)
            scrollToTop()
        }
    }

    return (
        <div className='w-full flex items-center justify-center gap-4'>
            <span className='px-4 py-2 bg-neutral-800 rounded-lg hover:bg-yellow-400' onClick={handlePrev} > 👈 Prev |</span>
            <span className='text-yellow-400' > Page {page} of {lastPage} </span>
            <span className='px-4 py-2 bg-neutral-800 rounded-lg hover:bg-yellow-400' onClick={handleNext}>| Next 👉 </span>
        </div>
    )
}

export default Pagination
