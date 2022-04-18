import SinglePost from "./SinglePost";
import {shallow,configure} from 'enzyme';
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
configure({ adapter: new Adapter() });


describe("Testing", () => {
    it("snapshot test for singlepost", () => {
        const component = shallow(<SinglePost post={{ _id: "1234456767", title: "Aman Johri", desc:"Hello, I am Aman Johri", createdAt: "Sat Apr 02 2022"}} />);
        console.log(component);
        const tree = component.debug();
        expect(tree).toMatchSnapshot();
    });
});