import styles from "./rating.module.css";
export default function Rating () {

    return (
            <div className={styles.rating}>
            <input type="radio" id="star5" name="rating" value="5" />
            <label for="star5"></label>
            <input type="radio" id="star4" name="rating" value="4" />
            <label for="star4"></label>
            <input type="radio" id="star3" name="rating" value="3" />
            <label for="star3"></label>
            <input type="radio" id="star2" name="rating" value="2" />
            <label for="star2"></label>
            <input type="radio" id="star1" name="rating" value="1" />
            <label for="star1"></label>
</div>

    );
}