

const LeftSide = () => {
    return (
        <div className="lg:sticky top-28">
            <select className="select select-error max-w-xs">
                <option disabled>Pick your favorite Article</option>
                <option>Access token and refresh token?</option>
                <option>Compare SQL and NoSQL databases?</option>
                <option>What is express js?</option>
                <option>What is Nest JS?</option>
            </select>
        </div>
    );
};

export default LeftSide;