import SinglePost from "./SinglePost";
import {shallow,configure} from 'enzyme';
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
configure({ adapter: new Adapter() });


describe("Testing", () => {
    it("snapshot test for singlepost", () => {
        const component = shallow(<SinglePost Postdata={[{ _id: "1234456767", title: "Aman Johri", desc:"Hello, I am Aman Johri", createdAt: "Sat Apr 02 2022", categories: "Tech" }]} />);
        console.log(component);
        const tree = component.debug();
        expect(tree).toMatchSnapshot();
    });

    it("text change test", () => {
        const component = shallow(<SinglePost Postdata={[{ _id: "1234456767", title: "Aman Johri", createdAt: "Sat Apr 02 2022", categories: "Tech" }]} />);
        component.find("#edit").simulate("click");
        component.find(".singlePostTitleInput").simulate("change", { target: { value: "Aman" } });
        component.find("#desc").simulate("change", { target: { value: "Hello, I am Aman" } });
        component.find("#updatebtn").simulate("click");
        expect(component.find("#title").props().value).toEqual("Aman");
        expect(component.find("#desc").props().value).toEqual("Hello, I am Aman");
    });
});