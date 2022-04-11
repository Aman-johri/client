import { render } from "@testing-library/react";
import CardPost from "./CardPost";
import {shallow,configure} from 'enzyme';
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
configure({ adapter: new Adapter() });

// test("Post component should render", () => {
//     render(<CardPost post={{title:"Aman Johri", createdAt:"Sat Apr 02 2022", categories:"Tech"}} />);
// });

// //snapshot test 
// test("snapshot", () => {
//     const component = shallow(<CardPost post={{title:"Aman Johri", createdAt:"Sat Apr 02 2022", categories:"Tech"}} />);
//     const tree = component.debug();
//     expect(tree).toMatchSnapshot();
// });

// //anchor link testing 
// test("anchor link", () => {
//     const component  = shallow(<CardPost post={{title:"Aman Johri", createdAt:"Sat Apr 02 2022", categories:"Tech"}} />);
//     expect(component.find("/single/16615481548248218")).toBeInTheDocument();
// });

describe("Testing CardPost component", () => {
    it("snapshot test",() => {
        const component = shallow(<CardPost post={{title:"Aman Johri", createdAt:"Sat Apr 02 2022", categories:"Tech"}} />);
        const tree = component.debug();
        expect(tree).toMatchSnapshot();
    });

    it("external link test",() => {
        const component = shallow(<CardPost post={{title:"Aman Johri", createdAt:"Sat Apr 02 2022", categories:"Tech" ,_id:"166354879548566255" }} />);
        expect(component.find("Link").prop("to")).toEqual("/single/166354879548566255");
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