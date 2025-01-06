import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faStar } from "@fortawesome/free-solid-svg-icons";
import { ReviewDto } from "@/interface/productsApi.dto";

const ProductReview = ({ reviews }: { reviews: ReviewDto[] }) => {
  return (
    <>
      {reviews && reviews.length > 0 && (
        <div className="mt-8 border-b border-t border-gray-400 *:p-5">
          <div className="flex items-center">
            <FontAwesomeIcon icon={faCaretDown} className="size-4" />
            <p>Review ({reviews.length})</p>
          </div>
          <div className="*:mb-8">
            {/*  Review Items */}
            {reviews.map((item, index) => (
              <div key={index}>
                <div className="flex justify-between">
                  <div>
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    {item.rating}
                  </div>
                  <p>{item.date}</p>
                </div>
                <div className="mt-2">
                  <b className="text-xs">{item.reviewerName}</b>
                  <p>{item.comment}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ProductReview;
