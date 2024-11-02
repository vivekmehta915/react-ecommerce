import { addDoc, collection, getDocs, query, serverTimestamp, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from '../firebase';

const ReviewSystem = ({ productId }) => {
    const [reviews, setReviews] = useState([]);
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');

    useEffect(() => {
        const fetchReviews = async () => {
            const q = query(collection(db, 'reviews'), where('productId', '==', productId));
            const querySnapshot = await getDocs(q);
            const reviewsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setReviews(reviewsData);
        };

        fetchReviews();
    }, [productId]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addDoc(collection(db, 'reviews'), {
            productId,
            rating,
            comment,
            timestamp: serverTimestamp()
        });
        setRating(0);
        setComment('');
        const q = query(collection(db, 'reviews'), where('productId', '==', productId));
        const querySnapshot = await getDocs(q);
        const reviewsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setReviews(reviewsData);
    };

    return (
        <div className="review-system">
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Rating</label>
                    <input
                        type="number"
                        value={rating}
                        onChange={(e) => setRating(Number(e.target.value))}
                        min="1"
                        max="5"
                        required
                    />
                </div>
                <div>
                    <label>Comment</label>
                    <textarea
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Submit Review</button>
            </form>
            <div className="reviews-list">
                {reviews.map(review => (
                    <div key={review.id} className="review-item">
                        <p>Rating: {review.rating}</p>
                        <p>{review.comment}</p>
                        <p>{new Date(review.timestamp.toDate()).toLocaleString()}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ReviewSystem;
