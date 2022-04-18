import { render } from "@testing-library/react";
import CardPost from "./CardPost";
import {shallow,configure} from 'enzyme';
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
configure({ adapter: new Adapter() });

describe("Testing CardPost component", () => {
    it("snapshot test",() => {
        const component = shallow(<CardPost post={{title:"Aman Johri", createdAt:"Sat Apr 02 2022", categories:"Tech"}} />);
        const tree = component.debug();
        expect(tree).toMatchSnapshot();
    });

    it("check createdAt date", () => {
        const component = shallow(<CardPost post={{title:"Aman Johri", createdAt:"Sat Apr 02 2022", categories:"Tech" ,_id:"166354879548566255" }} />);
        expect(component.find(".postDate").text()).toEqual("Sat Apr 02 2022");
    });

    it("check title",() => {
        const component = shallow(<CardPost post={{title:"Aman Johri", createdAt:"Sat Apr 02 2022", categories:"Tech" ,_id:"166354879548566255" }} />);
        expect(component.find(".postTitle").text()).toEqual("Aman Johri");
    })

    it("check categories",() => {
        const component = shallow(<CardPost post={{title:"Aman Johri", createdAt:"Sat Apr 02 2022", categories:"Tech" ,_id:"166354879548566255" }} />);
        expect(component.find(".postCat").text()).toEqual("Tech");
    })
})