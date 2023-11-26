import Image from "next/image";
import Link from "next/link";

const HomeBanner = () => {

    // const banner = 'https://source.unsplash.com/random/1280x300'

    return ( 
        <div className="relative mb-8">
            <div className="mx-auto py-6 flex gap-2 md:flex-row items-center justify-center">
                <div className="mb-8 d:mb-0">
                    <Link href="#">
                        <Image 
                            src='/homebanner.png'
                            width={1280}
                            height={300}
                            alt="Banner Black Friday"
                        />
                    </Link>
                </div>
                <div></div>
            </div>
        </div>
    );
}
 
export default HomeBanner;