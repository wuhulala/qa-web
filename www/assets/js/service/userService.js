// JavaScript source code
App.factory('userService', ['Restangular', function (Restangular) {
    var res = Restangular.all('');
    return {
        get: function (id) {
            res.one(id).get();
        },
        queryAll: function () {
            return res.get('user', {}).then(function (result) {
                return result.users;
            });
        },
        queryUserData:function(){
            return res.get('userLogin', {}).then(function (result) {
                return result.data;
            });
        },
        queryUserMenu: function () {
            return res.get('userLogin', {}).then(function (result) {
                return result.menus;
            });
        },
        query: function (params, username, role_name, is_valid,keyword) {
            var queryParam = {
                'username': username,
                'rolename':role_name,
                'isValid': is_valid,
                'keyword': keyword,
                'p':params.page(),
                'n': params.count(),
                'orderBy':params.orderBy()
            }
  
            return res.get('user', queryParam).then(function (result) {
                params.total(result.page_info.items_number);
                return result.users;
            });
        },

        add: function (model) {
            return res.all('user').post(model);
        },
        update: function (model) {
            return res.one('user', model.id).customPUT(model);
        },
        remove: function (id) {
            return res.one('user').customDELETE(id);
        },
        login: function (loginUser) {

            var date_encoded = $.param(loginUser);
            var header =  { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'};
            return res.all('session').post(date_encoded,undefined,header)

        },
        logout: function (token) {
            return res.one('session/').remove({
                "token": token
            })
        },
        updateUerInfo: function (user) {
            return res.one('enterprise_admin/'+user.id+'/name').put({
                name:user.mobile,
                pass:user.password
            })
        },
        updatePassword: function (user) {
            return res.one('enterprise_admin/'+user.id+'/pass').put({
                oldpass:user.oldPassword,
                newpass:user.newPassword
            })
        },
        resetPassword: function (userId) {
            return res.get('ResetPassword', { 'userId': userId });
        },

        queryRoleOperation: function (params, roleid) {
            var queryParam = {
                'roleid': roleid,
                'p': params.page(),
                'n': params.count(),
            }

            return res.get('roleOperation', queryParam).then(function (result) {
                //params.total(result.page_info.items_number);
                return result.role_resource_operations;
            });
        },
        //getRoleOperation: function(roleid){
        //    return res.get("roleOperation", { "roleid": roleid }).then(function (data) {
        //        return data.role_resource_operations;
        //    });
        //},
        getRole: function (roleid) {
            return res.all("role").one(roleid.toString()).get();
        },
        getRoleOperation: function (roleid) {
            return res.all("roleOperation").one(roleid.toString()).get();
        },
    }
}]);