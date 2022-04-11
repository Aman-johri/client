import Create from "./Create";
import {shallow,configure} from 'enzyme';
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
configure({ adapter: new Adapter() });


describe("Testing", () => {
    it("snapshot test for Create Post", () => {
        const component = shallow(<Create />);
        const tree = component.debug();
        expect(tree).toMatchSnapshot();
    });
    
    it("check State", () => {
    const component = shallow(<Create />);
    expect(component.state("title")).toEqual("");
    expect(component.state("desc")).toEqual("");
    });

    it("check for title field", () => {
        const component = shallow(<Create />);
        component.setState({ title: "Aman Johri" });
        expect(component.state("title")).toEqual("Aman Johri");
    });
    
    it("check for description", () => {
        const component = shallow(<Create />);
        component.setState({ desc: "Hello, I am Aman Johri" });
        console.log(component.debug);
        expect(component.state("desc")).toEqual("Hello, I am Aman Johri");
    });

    it("Button not works when any field is empty", () => {
        const component = shallow(
          <Create />
        );
        const instance = component.instance();
        console.log(instance.handleClick);
        jest.spyOn(instance, "handleClick");
        component.setState({ title: "Aman Johri", desc: "Hello, I am Aman Johri" });
        component.find("#btn").at(0).simulate("click");
        expect(instance.handleClick).toHaveBeenCalledTimes(0);
      });
    });


