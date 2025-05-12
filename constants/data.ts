const defaultPostDetail = {
    desc: "",
    utilities: "",
    pet: "",
    income: "",
    size: 0,
    school: 0,
    bus: 0,
    restaurant: 0,
};

const defaultUser = {
    username: "",
    avatar: "",
};

// Function to get the default PostData state
export const getDefaultPostData = () => ({
    id: 0,
    title: "",
    images: [],
    bedroom: 0,
    bathroom: 0,
    price: 0,
    address: "",
    city: "",
    latitude: 0,
    longitude: 0,
    postDetail: { ...defaultPostDetail },
    user: { ...defaultUser },
});

