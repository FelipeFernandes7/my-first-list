 await updateUser(STATUS.INCOMPLETO);
        const updateStatus = list.map((user: any) => {
           user.status = STATUS.INCOMPLETO;