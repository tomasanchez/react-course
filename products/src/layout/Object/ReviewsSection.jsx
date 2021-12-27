import { List } from "@ui5/webcomponents-react";
import React from "react";
import Review from "../../components/Reviews/Review";

const buildReviews = () => {
  return [
    {
      img: "https://sap.github.io/ui5-webcomponents/assets/images/avatars/woman_avatar_1.png",
      title: "An excellent review",
      stars: 4.5,
      name: "Monique Legrand",
    },
    {
      img: "https://sap.github.io/ui5-webcomponents/assets/images/avatars/man_avatar_2.png",
      title: "A good review",
      stars: 3,
      name: "Arthur Morgan",
      date: new Date(2020, 18, 12),
    },
    {
      img: "https://sap.github.io/ui5-webcomponents/assets/images/avatars/man_avatar_1.png",
      title: "An awesome review",
      stars: 5,
      name: "John Smith",
      date: new Date(2020, 10, 5),
    },
    {
      img: "https://sap.github.io/ui5-webcomponents/assets/images/avatars/woman_avatar_2.png",
      title: "Not another good review",
      stars: 2.5,
      name: "Natha Lee",
      date: new Date(2019, 11, 17),
    },
  ];
};

function ReviewsSection() {
  const reviews = buildReviews();

  return (
    <>
      <List headerText="Reviews">
        {reviews.map((review, i) => {
          return (
            <Review
              key={i}
              img={review.img}
              title={review.title}
              stars={review.stars}
              name={review.name}
              date={review?.date}
            />
          );
        })}
      </List>
    </>
  );
}

export default ReviewsSection;
