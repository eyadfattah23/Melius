import { Pagination, PaginationContent, PaginationItem, PaginationNext, PaginationPrevious, PaginationLink } from "./shadcn/ui/pagination"
function PageNums({totalPages, pageNum, setPageNum}){
    const handlePrevious = () => {
        if (pageNum > 1) {
            setPageNum(pageNum - 1);
        }
    };
  
    const handleNext = () => {
        if (pageNum < totalPages) {
            setPageNum(pageNum + 1);
        }
    };
    const renderPagination = (totalPages, setPageNum, currentPage) => {
        const paginationItems = [];
  
        for (let i = 0; i < totalPages; i++) {
            paginationItems.push(
                <PaginationItem key={i} active={i + 1 === currentPage}>
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
        <PaginationItem>
            <PaginationPrevious href="#" onClick={handlePrevious} />
        </PaginationItem>
        {renderPagination(totalPages, setPageNum, pageNum)}
        <PaginationNext href="#" onClick={handleNext} />
    </PaginationContent>
</Pagination>
}
export default PageNums