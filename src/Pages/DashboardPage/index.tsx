import CompanyCard from "../../Components/CompanyCard";

export default function DashboardPage() {
    return (
        <main>
            <CompanyCard
                name="Test Company"
                email="xfan0126@gmail.com"
                phoneNumber="909-619-9863"
                location="12345 Random Street"
                resources={["Resource 1", "Resource 2", "Resource 3"]}
                thumbnail="https://upload.wikimedia.org/wikipedia/commons/3/3a/M%C3%BCnster%2C_LVM%2C_B%C3%BCrogeb%C3%A4ude_--_2013_--_5149-51.jpg"
                type={["Non-profit", "charity", "volunteers"]}
                summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl. Etiam erat velit scelerisque in dictum. Felis eget velit aliquet sagittis id. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl. Etiam erat velit scelerisque in dictum. Felis eget velit aliquet sagittis id."
            />
        </main>
    );
}
