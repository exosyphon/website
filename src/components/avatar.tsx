import Image from 'next/image'

const Avatar = () => {
    return (
        <Image className="rounded-full" src="/me.png" alt="me" width="256" height="256" />
    )
}

export default Avatar
