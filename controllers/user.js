const Response = require("../helpers/response");
const { hashData, verifyHashedData } = require("../utils/hashData");
const { signJWT } = require("../utils/middleware");
const { addNewUser, getUserByEmail, getUserById } = require("../models/user");

exports.register = async (req, res) => {
  const { nama, email, password } = req.body;
  try {
    if (nama === "") {
      return res.json(
        Response(false, 400, `Nama tidak boleh kosong`, {
          name: "nama",
        })
      );
    }

    if (email === "") {
      return res.json(
        Response(false, 400, `Email tidak boleh kosong`, {
          name: "email",
        })
      );
    }

    if (password === "") {
      return res.json(
        Response(false, 400, `Password tidak boleh kosong`, {
          name: "password",
        })
      );
    }

    const users = await getUserByEmail(email);

    if (users.length > 0) {
      return res.json(
        Response(false, 400, `Email sudah terdaftar`, {
          name: "email",
        })
      );
    }

    const hashedPassword = await hashData(password);

    await addNewUser(nama, email, hashedPassword);

    return res.json(Response(true, 200, `Regsiterasi Berhasil`));
  } catch (err) {
    console.log("err", err);
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (email === "") {
      return res.json(
        Response(false, 400, `Email tidak boleh kosong`, {
          name: "email",
        })
      );
    }

    if (password === "") {
      return res.json(
        Response(false, 400, `Password tidak boleh kosong`, {
          name: "password",
        })
      );
    }

    const users = await getUserByEmail(email);

    if (!users.length > 0) {
      return res.json(
        Response(false, 400, `Email tidak terdaftar`, {
          name: "email",
        })
      );
    }

    const verifyPassword = await verifyHashedData(password, users[0].password);

    if (!verifyPassword) {
      return res.json(
        Response(false, 400, `Password salah`, {
          name: "password",
        })
      );
    }

    const payloadJwt = {
      userId: users[0].user_id,
    };

    const token = signJWT(payloadJwt);

    return res.json(
      Response(true, 200, "Login Berhasil", {
        token,
      })
    );
  } catch (err) {
    console.log("err", err);
  }
};

exports.getUser = async (req, res) => {
  const userId = req.userId;
  try {
    const users = await getUserById(userId);
    return res.json(
      Response(true, 200, `Get User`, {
        results: users[0],
      })
    );
  } catch (err) {
    console.log("err", err);
  }
};
