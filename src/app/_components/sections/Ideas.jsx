import Data from "@data/sections/ideas.json";
import Link from "next/link";
import Image from "next/image";

const IdeasSection = () => {
    return (
        <>
            {/* ideas */}
            <section>
                <div className="container mil-p-0-30">
                    <div className="mil-background-grid mil-softened" />

                    <div className="row justify-content-between">
                        <div className="col-lg-6">

                            <div>
                                <span className="mil-suptitle mil-upper mil-up mil-mb-30" dangerouslySetInnerHTML={{__html : Data.subtitle}} />
                                <h2 className="mil-upper mil-up mil-mb-40" dangerouslySetInnerHTML={{__html : Data.title}} />
                                <Link href={Data.button.link} className="mil-link mil-upper mil-up">
                                    {Data.button.label}
                                    <span className="mil-arrow">
                                        <Image src="/img/icons/1.svg" alt="arrow" width={12} height={12} />
                                    </span>
                                </Link>
                            </div>

                        </div>
                        <div className="col-lg-5 mil-mt-suptitle-offset">

                            <p className="mil-up mil-mb-60" dangerouslySetInnerHTML={{__html : Data.description}} />

                            <div className="row">
                                {Data.items.map((item, key) => (
                                <div className="col-sm-4" key={`ideas-item-${key}`}>
                                    <Link href={item.link} className="mil-icon-box mil-sm-center mil-mb-30 d-flex flex-column align-items-center text-center">
                                        <div className="mil-icon mil-icon-accent-bg mil-up mb-3">
                                            <Image src={item.icon} alt={item.label} width={18} height={18} />
                                        </div>
                                        <h6 className="mil-upper mil-up" dangerouslySetInnerHTML={{__html : item.label}} />
                                    </Link>
                                </div>
                                ))}
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            {/* ideas end */}
        </>
    );
};
export default IdeasSection;