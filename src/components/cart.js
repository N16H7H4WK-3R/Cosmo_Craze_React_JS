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

export default function ShoppingCart() {

    return (
        <div className="flex h-full flex-col overflow-y-scroll bg-gray-900">
            <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                <div className="flex items-start justify-between">
                    <div className="text-lg font-medium text-white">Shopping cart</div>
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
                                                <p className="ml-4">{product.price}</p>
                                            </div>
                                            <p className="mt-1 text-xs text-gray-400">{product.imageAlt}</p>
                                            <p className="mt-1 text-sm text-gray-400">Color : {product.color}</p>
                                        </div>
                                        <div className="flex flex-1 items-end justify-between text-sm">
                                            <p className="text-white">Qty {product.quantity}</p>

                                            <div className="flex">
                                                <button
                                                    type="button"
                                                    className="font-medium text-indigo-600 hover:text-indigo-500"
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-600 px-4 pt-6 pb-16 sm:px-6">
                <div className="flex justify-between text-base font-medium text-white">
                    <p>Subtotal</p>
                    <p>$262.00</p>
                </div>
                <p className="mt-1 text-xs text-white">Shipping and taxes calculated at checkout.</p>
                <div className="mt-6">
                    <a
                        href="/"
                        className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                    >
                        Checkout
                    </a>
                </div>
                <div className="mt-6 flex justify-center text-center text-sm text-white">
                    <p>
                        or{' '}
                        <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                            onClick={() => window.history.back()}
                        >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                        </button>
                    </p>
                </div>
            </div>
        </div>
    )
}
