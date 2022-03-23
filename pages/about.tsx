import Navbar from '../src/components/navbar'

const About = () => {
    return (
        <div>
            <Navbar />
            <div className="flex flex-col items-center justify-center mt-10">
                <div className="text-5xl">About</div>
                <div className="max-w-5xl mt-2 p-2">
                    <p>
                        Andrew Courter has over 10 years of experience as a software engineer, team lead, and software consultant. As a Manager of Engineering at RxRevu his goal is to build great teams that use best practices in Extreme Programming (XP) and User Centered Design to develop joyous software for users.
                    </p>

                    <p className="mt-5">
                        Andrew has built software across several industries including defense, airline travel, healthcare, finance, and media. He got his first taste of the benefits of XP while working at the American Thrombosis and Hemostatis Network (ATHN). Andrew then worked as a Staff Software Engineer for Pivotal Labs, an agile software development consulting firm, before founding the EarthVectors consultancy, where he helped clients realize significant cost savings and increase development speed through the implementation of XP practices.
                        He then took on the role as VP of Technology establishing Extreme Programming and accelerating the delivery of several key initiatives.
                    </p>

                    <p className="mt-5">
                        Andrew holds a Master of Science and Bachelor of Science in Computer Science from Texas Tech University.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About