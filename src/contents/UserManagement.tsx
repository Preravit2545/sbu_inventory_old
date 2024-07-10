function UserManagement() {
    return (
        <div className="content-wrapper">

            <div className="content-header">
                <div className="container-fluid">
                    <h1>จัดการข้อมูลผู้ใช้</h1>
                </div>
            </div>

            <div className="information">
                <form action="">
                    <div className="container-fluid">
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Username :</label>
                            <input type="text" className="form-control" placeholder="Enter name" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Password :</label>
                            <input type="text" className="form-control" placeholder="Enter name" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">UserRole :</label>
                            <select className="form-control">
                                <option value="เจ้าหน้าที่">เจ้าหน้าที่</option>
                                <option value="อาจารย์">อาจารย์</option>
                            </select>
                        </div>
                        <button className="btn btn-success">เพิ่มผู้ใช้</button>
                    </div>
                </form>
            </div>
            <hr />
            <div className="user">
                <button className="btn btn-primary">แสดงผู้ใช้</button>
            </div>
        </div>
    );
}


export default UserManagement;