"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faStar as faStarSolid,
} from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { ReviewDto } from "@/interface/productsApi.dto";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

const ProductReview = ({ reviews }: { reviews: ReviewDto[] }) => {
  // Function Icon star review rating
  const renderStars = (rating: number) => {
    const fullStars = Array(rating).fill(faStarSolid);
    const emptyStars = Array(5 - rating).fill(faStar);

    return [...fullStars, ...emptyStars].map((icon, index) => (
      <FontAwesomeIcon
        key={index}
        icon={icon}
        className="mr-1 size-4 text-yellow-500"
      />
    ));
  };

  return (
    <>
      {reviews && reviews.length > 0 && (
        <div className="mt-8 border-b border-t border-gray-400 *:p-5">
          {/* Accordion from headlessui*/}
          <Disclosure defaultOpen={true}>
            <DisclosureButton className="w-full py-2">
              <div className="group flex items-center">
                <FontAwesomeIcon
                  icon={faCaretDown}
                  className="size-4"
                />
                <p className="">Review ({reviews.length})</p>
              </div>
            </DisclosureButton>
            <DisclosurePanel>
              <div className="*:mb-8">
                {/*  Review Items */}
                {reviews.map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between">
                      <div>{renderStars(item.rating)}</div>
                      <p>{item.date}</p>
                    </div>
                    <div className="mt-2">
                      <b className="text-xs">{item.reviewerName}</b>
                      <p>{item.comment}</p>
                    </div>
                  </div>
                ))}
              </div>
            </DisclosurePanel>
          </Disclosure>
        </div>
      )}
    </>
  );
};

export default ProductReview;
