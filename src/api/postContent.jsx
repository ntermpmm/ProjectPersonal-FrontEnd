import axios from "../config/axios";

export const createContent = async (
    {
        country,
        nameContent,
        caption,
        title,
        description,
        description2,
        type,
        howToDescription,
        howToTitle,
    },
    mainPhoto
) => {
    try {
        console.log(country);
        console.log(mainPhoto);
        const formData = new FormData();

        formData.append("country", country);
        formData.append("nameContent", nameContent);
        formData.append("caption", caption);
        formData.append("mainPhoto", mainPhoto);
        formData.append("title", title);
        formData.append("description", description);
        formData.append("description2", description2);
        formData.append("type", type);
        formData.append("howToTitle", howToTitle);
        formData.append("howToDescription", howToDescription);
        // formData.append("steps", steps);

        // console.log(formData);
        for (let pair of formData.entries()) {
            console.log(pair[0] + ", " + pair[1]);
        }
        console.log(mainPhoto);
        const res = await axios.post("/contents/", formData);
        console.log(res);
        console.log(country);
        return res;
    } catch (err) {
        console.log(err);
    }
};
export const createSteps = async (steps, contentId) => {
    try {
        console.log("contentId");
        console.log(steps);

        for (const step of steps) {
            const formDataStep = new FormData();
            formDataStep.append("contentId", contentId);
            formDataStep.append("description", step.stepDescription);
            formDataStep.append("stepOrder", step.stepTitle);
            formDataStep.append("stepPhoto", step.stepPhoto);
            const res = await axios.post("/contents/step", formDataStep);
            console.log(step);
            // return res;
        }
    } catch (err) {
        console.log(err);
    }
};

export const createPayment = async (slipPhoto, userId, itemsId) => {
    try {
        const formData = new FormData();
        formData.append("slip", slipPhoto);
        formData.append("userId", userId);
        formData.append("itemsId", itemsId);
        console.log(formData);
        console.log(itemsId);
        const res = await axios.post("/orders/", formData);
        console.log(res);
        return res;
    } catch (err) {
        console.log(err);
    }
};

export const createItems = async (
    {
        itemName,
        oldPrice,
        price,
        typeOfItems,
        packageInclude,
        description,
        packageSpecification,
    },
    mainItems,
    imgDescrip1,
    imgDescrip2,
    imgDescrip3
) => {
    try {
        console.log(itemName);

        const formData = new FormData();
        formData.append("name", itemName);
        console.log(formData);
        formData.append("oldPrice", oldPrice);
        formData.append("price", price);
        formData.append("typeOfItems", typeOfItems);
        formData.append("packageInclude", packageInclude);
        formData.append("packageDescription", description);
        formData.append("packageSpecification", packageSpecification);
        formData.append("ImgHero", mainItems);
        formData.append("ImgDescrip1", imgDescrip1);
        formData.append("ImgDescrip2", imgDescrip2);
        formData.append("ImgDescrip3", imgDescrip3);
        console.log(formData);
        const res = await axios.post("/items/", formData);
        console.log(res);
        return res;
    } catch (err) {
        console.log(err);
    }
};

// export const editeProfile = async (
//     { firstName, lastName, phoneNumber, dateOfBirth, addresses },
//     user,
//     mainProfile
// ) => {
//     try {
//         const formData = new FormData();
//         formData.append("firstName", firstName);
//         formData.append("lastName", lastName);
//         formData.append("phoneNumber", phoneNumber);
//         formData.append("dateOfBirth", dateOfBirth);
//         formData.append("addresses", addresses);
//         formData.append("mainProfile", mainProfile);

//         const res = await axios.post(`/users/${user.id}`, formData);
//         console.log(res);
//         return res;
//     } catch (err) {
//         console.log(err);
//     }
// };
