import { Sequelize } from 'sequelize'

export const sequelize = new Sequelize(
    "db2g4nq08crkjh",
    "soliwxoxgesvdx",
    "c1c8ae62fe5c7fed2d45805c9553c673567166deb5f3a330a5e2bca230019975",
    {
        host: "ec2-34-231-63-30.compute-1.amazonaws.com",
        dialect: "postgres",
        port: 5432,
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        }
    }
)