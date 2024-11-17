import { Pagination, PaginationContent, PaginationItem, PaginationNext, PaginationPrevious, PaginationLink } from "../shadcn/ui/pagination"

/**
 * `PageNums` component provides a pagination control for navigating through pages.
 * It includes previous and next buttons and dynamically renders page numbers.
 * Handles page changes and disables buttons as needed based on the current page.
 */

function PageNums({totalPages, pageNum, setPageNum}){
    /**
     * Handles the action when the previous page button is clicked.
     * Decreases the page number if it is greater than 1, otherwise prevents the default action.
     */
    const handlePrevious = (e) => {
        if (pageNum > 1) {
            setPageNum(pageNum - 1);
        }
        else {
            e.preventDefault();
        }
    };
    /**
     * Handles the action when the next page button is clicked.
     * Increases the page number if it is less than the total number of pages, otherwise prevents the default action.
     */
    const handleNext = (e) => {
        if (pageNum < totalPages) {
            setPageNum(pageNum + 1);
        }
        else {
            e.preventDefault();
        }
        
    };
    const renderPagination = (totalPages, setPageNum, currentPage) => {
        const paginationItems = [];
  
        for (let i = 0; i < totalPages; i++) {
            paginationItems.push(
                <PaginationItem key={i}    className={i + 1 === currentPage ? " rounded-[8px] bg-[#1655F2] text-white" : "rounded-[8px] hover:bg-[#1655F2] text-[#999999] hover:text-black hover:cursor-pointer hover:bg-opacity-40"}>
                    <PaginationLink
                        href="#"
                        onClick={() => setPageNum(i + 1)}
                    >
                        {i + 1}
                    </PaginationLink>
                </PaginationItem>
            );
        }
  
        return paginationItems; 
    };
  
    return <Pagination >
    <PaginationContent className={"flex justify-between items-center w-full"}>
            <PaginationPrevious href="#" onClick={(e)=> handlePrevious(e)}  className={pageNum <= 1 ? "cursor-not-allowed text-[#999999] hover:text-[#999999]": ""}/>
        <div className="flex gap-[2px]">
        {renderPagination(totalPages, setPageNum, pageNum)}
        </div>
        <PaginationNext href="#" onClick={(e)=> handleNext(e)} className={pageNum == totalPages ? "cursor-not-allowed text-[#999999] hover:text-[#999999]": ""}/>
    </PaginationContent>
</Pagination>
}
export default PageNums