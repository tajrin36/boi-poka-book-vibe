import bannerImg from '../../src/assets/books.jpg'

const Banner = () => {
    return (
        <div>
            <div className="hero bg-base-200 rounded-xl mb-10">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src={bannerImg}
                        className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='space-y-3'>
                        <h1 className="text-[#131313] text-4xl md:text-5xl font-bold md:w-4/5">Books to freshen up your bookshelf</h1>
                        <button className="btn bg-[#23BE0A] text-[#FFF] text-xl font-bold">View The List</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;