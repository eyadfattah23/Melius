import { Pagination, PaginationContent, PaginationItem, PaginationNext, PaginationPrevious, PaginationLink } from "../shadcn/ui/pagination"
function PageNums({totalPages, pageNum, setPageNum}){
    const handlePrevious = (e) => {
        if (pageNum > 1) {
            setPageNum(pageNum - 1);
        }
        else {
            e.preventDefault();
        }
    };
  
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
                <PaginationItem key={i}    className={i + 1 === currentPage ? "pagination_active" : "pagination_normal"}>
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
  
    return <Pagination>
    <PaginationContent>
        <PaginationItem >
            <PaginationPrevious href="#" onClick={(e)=> handlePrevious(e)}  className={pageNum <= 1 ? "pagination_disabled": ""}/>
        </PaginationItem>
        {renderPagination(totalPages, setPageNum, pageNum)}
        <PaginationNext href="#" onClick={(e)=> handleNext(e)} className={pageNum == totalPages ? "pagination_disabled": ""}/>
    </PaginationContent>
</Pagination>
}
export default PageNums