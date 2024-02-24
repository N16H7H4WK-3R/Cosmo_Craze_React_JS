import { HeartIcon } from '@heroicons/react/24/outline';

const products = [
    {
        id: 1,
        name: 'Throwback Hip Bag',
        href: '#',
        color: 'Salmon',
        price: '$90.00',
        quantity: 1,
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
        imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
    },
    {
        id: 2,
        name: 'Medium Stuff Satchel',
        href: '#',
        color: 'Blue',
        price: '$32.00',
        quantity: 1,
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
        imageAlt:
            'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
    },
]

export default function Wishlist() {

    return (
        <div className="flex h-full pb-12 flex-col overflow-y-scroll bg-gray-900">
            <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                <div className="flow-root">
                    <a href="/cart" className="group -m-2 flex items-center p-2">
                        <span className=" text-lg mr-2 font-medium text-white">Wishlist </span>
                        <HeartIcon
                            className="h-5 w-5 flex-shrink-0 text-red-600 fill-red-600"
                            aria-hidden="true"
                        />
                    </a>
                </div>

                <div className="mt-10">
                    <div className="flow-root">
                        <ul className="-my-6 divide-y divide-gray-600">
                            {products.map((product) => (
                                <li key={product.id} className="flex py-6">
                                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                        <img
                                            src={product.imageSrc}
                                            alt={product.imageAlt}
                                            className="h-full w-full object-cover object-center"
                                        />
                                    </div>

                                    <div className="ml-4 flex flex-1 flex-col">
                                        <div>
                                            <div className="flex justify-between text-base font-medium text-white">
                                                <h3>
                                                    <a href={product.href}>{product.name}</a>
                                                </h3>
                                                <HeartIcon
                                                    className="h-10 w-10 flex-shrink-0 text-red-600 cursor-pointer"
                                                    aria-hidden="true"
                                                    onClick={(e) => {
                                                        e.currentTarget.classList.toggle('fill-red-600');
                                                    }}
                                                />
                                            </div>
                                            <p className="mt-1 text-xs text-gray-400">{product.imageAlt}</p>
                                        </div>
                                        <div className="flex flex-1 items-end justify-between text-sm">
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
