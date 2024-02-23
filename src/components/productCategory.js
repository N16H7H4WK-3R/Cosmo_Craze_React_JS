
const callouts = [
    {
        name: 'Mens',
        description: 'Latest collection of casual wear.',
        imageSrc: 'https://bollywoo.ooo/cdn/shop/products/off1.jpg?v=1681655209',
        imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
        href: '#',
    },
    {
        name: 'Women',
        description: 'Focus on the latest fashion trends.',
        imageSrc: 'https://filmfare.wwmindia.com/photogallery/2023/dec/triptidimri11702803514.jpg',
        imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
        href: '#',
    },
    {
        name: 'Kids',
        description: 'New arrivals are here.',
        imageSrc: 'https://starsbiodata.com/wp-content/uploads/2017/06/Taimur-Ali-Khan.jpg',
        imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
        href: '#',
    },
    {
        name: 'Home & Decor',
        description: 'Shop for the latest home decor products.',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
        imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
        href: '#',
    },
]

export default function Category() {
    return (
        <div className="bg-gray-900 pt-16 pb-2">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" style={{ borderTop: "1px solid white", borderBottom: "1px solid white" }}>
                <div className="mx-auto max-w-2xl sm:py-8 lg:max-w-none">
                    <h2 className="text-2xl mb-8 font-bold text-white">Categories : </h2>

                    <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-12">
                        {callouts.map((callout) => (
                            <div key={callout.name} className="group relative">
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                    <img
                                        src={callout.imageSrc}
                                        alt={callout.imageAlt}
                                        className="h-80 w-full object-cover object-center group-hover:opacity-75"
                                    />
                                </div>
                                <h3 className="mt-6 text-sm text-white">
                                    <a href={callout.href}>
                                        <span className="absolute inset-0" />
                                        {callout.name}
                                    </a>
                                </h3>
                                <p className="text-xs text-white">- {callout.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}